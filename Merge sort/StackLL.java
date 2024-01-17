public class StackLL {
 //stack using Linked List
    private static class Node {
        int data;
        Node next;

        Node(int data) {
            this.data = data;
            next = null;
        }
    }

    static class Stack {
        public static Node head = null;
        public static void push(int data) {
            Node newNode = new Node(data);

            if(head == null) {
                head = newNode;
                return;
            }
            newNode.next = head;
            head = newNode;
        }

        public static boolean isEmpty() {
            return head == null;
        }

        public static int pop() {
            if(isEmpty()) {
                return -1;
            }
            Node top = head;
            head = head.next;
            return top.data;
        }

        public static int peek() {
            if(isEmpty()) {
                return -1;
            }
            Node top = head;
            return top.data;
        }
    }

import java.util.ArrayList;

static class Stack {
    ArrayList<Integer> list = new ArrayList<>();

    public void push(int data) {
        list.add(data);
    }

    public boolean isEmpty() {
        return list.size() == 0;
    }

    public int pop() {
        if (isEmpty()) {
            return -1;
        }
        int top = list.remove(list.size() - 1);
        return top;
    }

    public int peek() {
        if (isEmpty()) {
            return -1;
        }
        return list.get(list.size() - 1);
    }

    }

    public static void main(String args[]) {
        Stack stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.push(4);

        while (!stack.isEmpty()) {
            System.out.println(stack.peek());
            stack.pop();
        }

        Stack stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.push(4);

        while (!stack.isEmpty()) {
            System.out.println(stack.peek());
            stack.pop();
        }
    }
}
