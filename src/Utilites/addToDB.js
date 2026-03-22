import { toast } from "react-toastify";

const getStoreApps =() => {

    const storedAppsSTR =localStorage.getItem("installedApps")
    if (storedAppsSTR) {
        const storeAppsData= JSON.parse(storedAppsSTR);
        return storeAppsData;
    }
    else {
        return [];
    }
}

const addToStoreDB =(id) => {

    const storeAppsData =getStoreApps();
    if (storeAppsData.includes(id)) {

        
       toast("This app already exit")
       return false;
    }
    else {
        storeAppsData.push(id);
        const app =JSON.stringify(storeAppsData);
        localStorage.setItem("installedApps",app);
        toast.info("App installed successfully!");
        return true;
        // console.log(storeAppsData);
    }
}

const removeAppStore =(id) => {
    const storeAppsData = getStoreApps();
    const updatedApps =storeAppsData.filter(appId => appId !==id);
    localStorage.setItem("installedApps",JSON.stringify(updatedApps));
}

export  {addToStoreDB,getStoreApps,removeAppStore};