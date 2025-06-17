export const getIndexedDB = (): IDBFactory | null => {
  if (typeof window === "undefined") {
    return null;
  }

  return (
    window.indexedDB ||
    (window as any).mozIndexedDB ||
    (window as any).webkitIndexedDB ||
    (window as any).msIndexedDB ||
    null
  );
};

export const getDBName = (): string => {
  if (typeof window === "undefined") return "DEFAULT_DB";
  return "EM_FS_" + window.location.pathname.replace(/\W+/g, "_");
};

export const DB_VERSION = 20;
export const DB_STORE_NAME = "FILE_DATA";
