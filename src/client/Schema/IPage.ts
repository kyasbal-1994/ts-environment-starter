type IPage = ControlPage | DancePage;
export interface ControlPage {
    type: "control";
    controlerType: "dropdown" | "color" | "slider" | "shakeIndicate";
    target: string;
    text: string;
    canback: boolean;
}

export interface DancePage {
    type: "dance";
}

export default IPage;
