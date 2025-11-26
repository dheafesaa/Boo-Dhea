export type IconName =
  | "home"
  | "heart"
  | "chat"
  | "profile"
  | "db"
  | "test"
  | "source";

export interface MenuItem {
  id: string;
  label: string;
  href?: string;
  ariaLabel?: string;
  iconName: IconName;
}

export const menuItems: MenuItem[] = [
  { id: "home", label: "Beranda", iconName: "home", href: "/" },
  { id: "heart", label: "Cocok", iconName: "heart", href: "/likes" },
  { id: "chat", label: "Pesan", iconName: "chat", href: "/messages" },
  { id: "profile", label: "Profil", iconName: "profile", href: "/profile" },
  { id: "db", label: "Basis Data Kepribadian", iconName: "db", href: "/db" },
  { id: "test", label: "Tes Kepribadian", iconName: "test", href: "/test" },
  { id: "source", label: "Sumber", iconName: "source", href: "/source" },
];
