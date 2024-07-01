export interface INavChildrenItem {
  icon?: React.ReactNode;
  label: string;
  route: string;
}

export interface INavMenuItem {
  icon: React.ReactNode;
  label: string;
  route?: string;
  children?: INavChildrenItem[];
}
