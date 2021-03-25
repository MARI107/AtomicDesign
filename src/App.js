import { BrowserRouter } from "react-router-dom";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCasd } from "./components/organisms/user/UserCard";
import { HeaderOnly } from "./components/templates/HeaderOnly";
import "./styles.css";

const user = {
name: "Mari",
image: "https://source.unsplash.com/brFsZ7qszSY",
email: "abcd@abcd.co.jp",
phone: "080-0000-0000",
company: {
  name: "テスト株式会社"
},
website: "https://google.com"
};

export default function App() {
  return (
    <BrowserRouter>
    <HeaderOnly>
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <br />
      <SearchInput />
      <UserCasd user={user} />
    </HeaderOnly>
    </BrowserRouter>
  );
}
