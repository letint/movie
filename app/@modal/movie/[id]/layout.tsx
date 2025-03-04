import { Modal } from "@/components/Modal";

export default function MovieModalLayout({ children }: { children: React.ReactNode }) {
  return <Modal>{children}</Modal>;
}