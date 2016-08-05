/* The guess API is defined in the parent class GuessGame.
   @param num, your guess
   @return -1 if my number is lower, 1 if my number is higher, otherwise return 0
      int guess(int num); */

public class Solution extends GuessGame {
    public int guessNumber(int n) {
        int max = n, min = 1;
        int number = min + (max - min >> 1);
        while(guess(number) != 0) {
            if (guess(number) > 0) {
                min = number + 1;
            } else {
                max = number - 1;
            }
            number = min + (max - min >> 1);
        }
        return number;
    }
}
