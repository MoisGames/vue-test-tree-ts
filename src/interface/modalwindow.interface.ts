export interface Tree extends TreeItem {
  id: number,
  name: string,
  children: TreeItem[]
}

export interface TreeItem {
  id: number,
  name: string,
  children: TreeItem[]
}
