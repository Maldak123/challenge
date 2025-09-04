import React, { useState } from "react";
import Input from "../components/cadastro/Input";

import Faixa from "../assets/sections/banner-roxo.png";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    senha: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    alert(`Enviado`);
  };

  return (
    <main className="flex w-full flex-col items-center py-16 lg:py-30">
      <div className="w-full px-6 pt-6 lg:max-w-[45%]">
        <div className="relative flex items-center justify-center overflow-hidden p-6">
          <img
            src={Faixa}
            alt="Cadastre-se"
            className="absolute -z-999 select-none"
          />

          <h1 className="font-[Anton] !text-5xl text-white uppercase">login</h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-12 flex w-full flex-col gap-12"
        >
          <div className="flex flex-col gap-5">
            <Input
              label="Digite seu endereço de e-mail"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="seuemail@exemplo.com"
              required
            />

            <Input
              label="Senha"
              type="password"
              name="senha"
              value={formData.senha}
              onChange={handleChange}
              placeholder="Crie uma senha forte"
              required
              minLength="8"
            />
          </div>

          <button
            type="submit"
            className="cursor-pointer rounded-sm bg-[#981FBA] py-3 font-[Anton] text-xl text-white uppercase"
          >
            Entrar
          </button>
        </form>

        <div className="mt-3 flex flex-col text-[#981FBA] underline lg:text-3xl">
          <p>
            <a href="#">Esqueceu a senha?</a>
          </p>
          <p>
            <a href="#">Nova por aqui? Cadastre-se!</a>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Login;
