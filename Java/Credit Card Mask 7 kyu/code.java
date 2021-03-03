public class Maskify {
    public static String maskify(String str) {
        String newString = "";
      
        for (int i = 0; i < str.length(); i++) {
            if (str.length() - (i + 1) >= 4) {
                newString += "#";
            }
            else {
                newString += str.charAt(i);
            }
        }
        return newString;
    }
}