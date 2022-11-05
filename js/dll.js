class musicNode{
    constructor(){
        this.name = "";
        this.path = "";
        this.prev = null;
        this.next = null;
    }
}
class dll{
    constructor(){
        this.head = null;
    }
    insert(name,path){
        var newNode = new musicNode();
        newNode.name = name;
        newNode.path = path;
        if (this.head == null) {
            newNode.prev = newNode;
            newNode.next = newNode;
            this.head = newNode;
        }
        else{
            var p = new musicNode();
            p = this.head;
            // p.prev = musicNode;
            while (p.next!=this.head) {
                p = p.next;
            }
            newNode.prev = p;
            p.next = newNode;
            newNode.next = this.head;
            this.head.prev = newNode;
        }
    }
    print(){
        var p = new musicNode();
        p = this.head;
        while (p!=null) {
            console.log(p.name);
            console.log(p.path);
            p = p.next;
        }
    }
}