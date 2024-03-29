import Button from "./_components/Button";
import Result from "./_components/Result";
import TextArea from "./_components/TextArea";
import RecoilRootWrapper from "./_components/RecoilRootWrapper";
import Title from "./_components/Title";
import TermOfService from "./_components/TOS";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <RecoilRootWrapper>
      <ToastContainer />
      <main className="flex min-h-screen flex-col items-center justify-between p-4 lg:p-24">
        <div className="max-w-5xl w-full font-mono text-sm">
          <div className="mb-4">
            <Title />
          </div>
          <div>
            <TextArea />
            <TermOfService />
            <div className="mt-6">
              <Button />
            </div>
          </div>
          <Result />
        </div>
      </main>
    </RecoilRootWrapper>
  );
}
