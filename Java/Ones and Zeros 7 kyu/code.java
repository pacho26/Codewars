import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class BinaryArrayToNumber {

    public static int ConvertBinaryArrayToInt(List<Integer> binary) {
        int exponent = 0;
        double result = 0;
        for (int i = binary.size(); i > 0; i--) {
            if (binary.get(i - 1) == 1) {
                result += Math.pow(2, exponent);
            }
            exponent++;
        }

        return (int)result;
    }
}