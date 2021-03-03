import java.util.HashMap;
import java.util.Map;

public class DuplicateEncoder {
  static String encode(String word){
    word = word.toLowerCase();
    Map<Character, Integer> mapOfAppeared = new HashMap<>();
    for (int i = 0; i < word.length(); i++) {
      if (mapOfAppeared.containsKey(word.charAt(i))) {
        mapOfAppeared.put(word.charAt(i), mapOfAppeared.get(word.charAt(i)) + 1);
      }
      else {
        mapOfAppeared.put(word.charAt(i), 1);
      }
    }

    String newWord = "";
    for (int i = 0; i < word.length(); i++) {
      if (mapOfAppeared.get(word.charAt(i)) > 1) {
        newWord += ")";
      }
      else {
        newWord += "(";
      }
    }
    word = newWord;
    return word;
  }
}