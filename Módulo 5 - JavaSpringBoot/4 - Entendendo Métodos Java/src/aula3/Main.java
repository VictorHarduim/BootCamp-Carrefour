package src.aula3;

public class Main {
    public static void main(String[] args) {
        double areaQuadrado = src.aula3.Quadrilatero.area(3);
        System.out.println("Area do quadrado: " + areaQuadrado);

        double areaRetangulo = src.aula3.Quadrilatero.area(5,5);
        System.out.println("Area do retangulo: " + areaRetangulo);

        double areaTrapezio = Quadrilatero.area(7, 8, 9);
        System.out.println("Area do trapezio: " + areaTrapezio);

    }
}
