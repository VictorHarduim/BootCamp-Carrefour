package src.aula3;

public class Quadrilatero {
    public static double area(double lado)  {
        return lado*lado;
    }
    public static double area(double l1, double l2) {
        return l1*l2;
    }
    public static double area(double baseMaior, double baseMenor, double altura) {
        return ((baseMaior+baseMenor)*altura)/2;
    }
}
