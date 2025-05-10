'use client'
import {Form} from "./pages/form/form"
import {Header} from "./pages/header/header";

export default function Home () {
  return (
    <div>
      <Header/>
      <main>
        <div>
          <Form/>
        </div>
      </main>
    </div>
  );
}
