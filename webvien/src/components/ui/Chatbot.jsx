import { useState, useEffect } from "react"; // Thêm useEffect ở đây
import { BotIcon, X } from "lucide-react";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!window.chatbase || window.chatbase("getState") !== "initialized") {
      window.chatbase = (...args) => {
        if (!window.chatbase.q) window.chatbase.q = [];
        window.chatbase.q.push(args);
      };
      window.chatbase = new Proxy(window.chatbase, {
        get(target, prop) {
          if (prop === "q") return target.q;
          return (...args) => target(prop, ...args);
        },
      });
    }

    const onLoad = () => {
      const script = document.createElement("script");
      script.src = "https://www.chatbase.co/embed.min.js";
      script.id = "-jkhr3ncaZNcX2Wp4VebN"; // Thay bằng ID thật của bạn nếu khác
      script.setAttribute("domain", "www.chatbase.co");
      document.body.appendChild(script);
    };

    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad);
      return () => window.removeEventListener("load", onLoad);
    }
  }, []); // Chạy 1 lần khi component được mount

  const handleSend = async () => {
    if (!question.trim() || isLoading) return;
    setIsLoading(true);
    setResponse("Đang xử lý...");
    try {
      const reply = await chatWithISED(question);
      setResponse(reply);
    } catch (err) {
      setResponse("Lỗi kết nối máy chủ. Vui lòng thử lại sau.");
    }
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!open ? (
        <button
          onClick={() => setOpen(true)}
          className="bg-blue-600 text-white rounded-full p-3 shadow-xl hover:scale-105 transition"
        >
          <BotIcon />
        </button>
      ) : (
        <div className="w-80 bg-white rounded-xl shadow-lg p-4 animate-fadeIn">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold">Chat với ISED</h2>
            <button onClick={() => setOpen(false)}>
              <X className="w-5 h-5" />
            </button>
          </div>
          <textarea
            rows={3}
            className="w-full border rounded p-2 mb-2"
            placeholder="Nhập câu hỏi..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <button
            onClick={handleSend}
            className={`w-full py-1 rounded ${
              isLoading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
            disabled={isLoading}
          >
            {isLoading ? "Đang gửi..." : "Gửi"}
          </button>
          {response && (
            <div className="mt-3 text-sm whitespace-pre-wrap text-gray-700">
              {response}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
