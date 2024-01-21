import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import dbConnect from "@/config/db-connect";
const inter = Inter({ subsets: ["latin"] });
import SignUp from "@/components/auth/signup/sign-up";
import AuthModal from "@/components/Modals/auth-modal/auth-modal";
export default function Home() {
  dbConnect();
  return (
    <>
      <AuthModal>
        <SignUp />
      </AuthModal>
    </>
  );
}
