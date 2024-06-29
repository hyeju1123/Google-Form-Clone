import App from "./App";
import { RecoilRoot } from "recoil";

export default function RootLayout() {
  return (
    <RecoilRoot>
      <App />
    </RecoilRoot>
  );
}
