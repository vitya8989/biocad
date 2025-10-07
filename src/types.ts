interface BaseItem {
    enabled: boolean;
    label: string;
    url?: string;
}

export type Button = Omit<BaseItem, 'url'>;

export type SidebarItem = BaseItem;

export type SocialItem = Required<Omit<BaseItem, 'label'>>

interface Socials {
    vk: SocialItem;
    telegram: SocialItem;
    dzen: SocialItem;
    vkVideo: SocialItem;
}

export interface Buttons {
    ios: Button;
    android: Button;
    apk: Button;
}

interface Sidebar {
    download_app: SidebarItem;
    watch_video: SidebarItem;
    qr_code: SidebarItem;
}

export interface MainData {
    title: string;
    subtitle: string;
    videoUrl: string;
    buttons: Buttons;
    sidebar: Sidebar;
    socials: Socials;
}

export interface MenuItem {
    id: number;
    label: string;
    link: string;
}

export interface MenuData {
    logo: Omit<MenuItem, 'id'>;
    menu: MenuItem[];
}

export interface SliderItemType {
    id: number;
    photo: string;
    name: string;
    date: string;
    text: string;
}

export interface SliderData {
    enabled: boolean;
    title: string;
    description: string;
    count: number;
    data: SliderItemType[];
}