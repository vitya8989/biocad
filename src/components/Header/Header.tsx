import {Logo} from "@/components/Logo/Logo";
import {MainData, MenuData} from "@/types";
import {getMenuData} from "@/api/menu";
import {Menu} from "@/components/Header/components/Menu/Menu";
import {DownloadAppLink} from "@/components/Header/components/DownloadAppLink/DownloadAppLink";

import styles from './Header.module.css'

interface HeaderProps {
    data: MainData;
}

export async function Header({data}: HeaderProps) {
    const downLoadAppLink = data.sidebar.download_app;

    const menuData: MenuData = await getMenuData();

    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.content}>
                    <Logo isHeader/>
                    <Menu menuData={menuData.menu} />
                    {downLoadAppLink?.enabled && (<DownloadAppLink downLoadAppLinkLabel={downLoadAppLink.label} />)}
                </div>
            </div>
        </header>
    )
}
