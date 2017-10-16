import Pages from "../pages";
import IPage from "../Schema/IPage";
export interface IAppState {
    page: IPage;
}

export function createInitialState(): IAppState {
    return {
        page: Pages.current,
    };
}
