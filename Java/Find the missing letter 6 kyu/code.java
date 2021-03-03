public class Kata
{
  public static char findMissingLetter(char[] array)
  {
        char missingCharachter = 0;
    
        for (int i = 0; i < array.length; i++) {
            if (array[i + 1] == array[i] + 2) {
                missingCharachter = (char) (array[i] + 1);
                break;
            }
        }
    
        return missingCharachter;
  }
}