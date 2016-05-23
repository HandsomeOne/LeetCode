public class MinStack {

    private Deque<Integer> stack;
    private int min;

    public MinStack() {
        stack = new ArrayDeque<Integer>();
        min = Integer.MAX_VALUE;
    }
    
    public void push(int x) {
        stack.push(x);
        if (x < min) {
            min = x;
        }
    }
    
    public void pop() {
        int x = stack.pop();
        if (x == min) {
            min = Integer.MAX_VALUE;
            for (int n : stack) {
                min = n < min ? n : min;
            }
        }
    }
    
    public int top() {
        return stack.peek();
    }
    
    public int getMin() {
        return min;
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack obj = new MinStack();
 * obj.push(x);
 * obj.pop();
 * int param_3 = obj.top();
 * int param_4 = obj.getMin();
 */
