interface nestedListType {
  type: string;
  id: number;
  name: string;
  nestedItems?: nestedListType[];
}
export interface FileItemType {
  fileName: string;
  setSelectedItem: Function;
  tree: nestedListType[];
  setTree: Function;
  id: number;
}
export interface FolderItemType {
  folderName: string;
  setSelectedItem: Function;
  tree: nestedListType[];
  setTree: Function;
  id: number;
  nestedItems: nestedListType[] | undefined;
}
