export interface ISidebarChildrenItem {
  icon?: React.ReactNode;
  label: string;
  route: string;
}

export interface ISidebarMenuItem {
  icon: React.ReactNode;
  label: string;
  route?: string;
  children?: ISidebarChildrenItem[];
}
