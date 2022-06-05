public class Interface_Test{
      public static void main(String args[]) {
        D obj = new D();
        obj.a();
        obj.b();
        obj.c();
    }
}

interface A {
    void a();
    void b();
    void c();
}

abstract class B implements A{
    public void c(){
        System.out.println("Method C");
    }
}

class D extends B{
    public void a(){
        System.out.println("Method A");
    }
        public void b(){
        System.out.println("Method B");
    }
}
  