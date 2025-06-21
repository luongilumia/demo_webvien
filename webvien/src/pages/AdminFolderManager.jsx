import { useState } from "react";

const initialFolders = [
  {
    id: 1,
    name: "Giáo dục",
    children: [
      { id: 2, name: "Thư viện" },
      { id: 3, name: "Tư liệu" },
    ],
  },
];

export default function AdminFolderManager() {
  const [folders, setFolders] = useState(initialFolders);

  const addSubfolder = (parentId) => {
    const name = prompt("Tên thư mục con:");
    setFolders((prev) =>
      prev.map((folder) =>
        folder.id === parentId
          ? {
              ...folder,
              children: [...folder.children, { id: Date.now(), name }],
            }
          : folder
      )
    );
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Quản lý thư mục</h2>
      {folders.map((folder) => (
        <div key={folder.id} className="mb-4">
          <div className="font-semibold">📁 {folder.name}</div>
          <button
            onClick={() => addSubfolder(folder.id)}
            className="text-sm text-blue-500"
          >
            + Thêm thư mục con
          </button>
          <ul className="ml-4 mt-2 list-disc">
            {folder.children.map((sub) => (
              <li key={sub.id}>{sub.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
