package src.aula1;

import src.aula1.Calculadora;
import src.aula1.Emprestimo;
import src.aula1.Mensagem;

public class Main {

    public static void main(String[] args) {

        //Calculadora
        System.out.println("Exercicio Calculadora.");
        Calculadora.soma(3,6);
        Calculadora.subtracao(9, 1.8);
        Calculadora.produto(7, 8);
        Calculadora.divisao(5, 2.5);


        //Mensagem
        System.out.println("Exercicio Mensagem:");
        Mensagem.obterMensagem(9);
        Mensagem.obterMensagem(14);
        Mensagem.obterMensagem(1);

        //Emprestimo
        System.out.println("Exercicio Empréstimo:");
        Emprestimo.calcular(1000, Emprestimo.getDuasParcelas());
        Emprestimo.calcular(1000, Emprestimo.getTresParcelas());
        Emprestimo.calcular(1000,5);

    }
}
