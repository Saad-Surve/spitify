class musicNode {
    constructor() {
        this.name = "";
        this.path = "";
        this.flag = 0;
        this.coverPath = "";
        this.prev = null;
        this.next = null;
    }
}
class dll {
    constructor() {
        this.head = null;
        this.tempHead = this.head;
    }
    insert(name, path, coverPath, flag) {
        var newNode = new musicNode();
        newNode.name = name;
        newNode.path = path;
        newNode.coverPath = coverPath;
        newNode.flag = flag;
        if (this.head == null) {
            newNode.prev = newNode;
            newNode.next = newNode;
            this.head = newNode;
            this.tempHead = this.head;
        }
        else {
            var p = new musicNode();
            p = this.head;
            do {
                let m = p.name.toLowerCase();
                let n = newNode.name.toLowerCase();
                if (m === n) {
                    return;
                }
             
                p = p.next;
            }while(p!=this.head )
            p = p.prev;
            newNode.prev = p;
            p.next = newNode;
            newNode.next = this.head;
            this.head.prev = newNode;
        }
    }
    deleteEnd() {
        let p = new musicNode();
        p = this.head;
        if (p == this.head && p.next == this.head) {
            this.head = null;
        } else {
            while (p.next != this.head) {
                
                p = p.next;
            }
            p.prev.next = this.head;
            this.head.prev = p.prev;
            p.next = null;
            p.prev = null;

        }
    }
    deleteStart() {

        if (this.head.next == this.head) {
            this.head = null;
        } else {
            this.head.next.prev = this.head.prev;
            this.head.prev.next = this.head.next;
            this.head = this.head.next;
            this.tempHead = this.head;
        }
    }
    deleteAtPos(name) {
        let p = this.head;
        while (!(p.name.toLowerCase() === name.toLowerCase())) {
            p = p.next;
        }
        if (p==this.head) {
            this.deleteStart();
        }
        else if(p.next == this.head){
            this.deleteEnd();
        }
        else{
            p.prev.next = p.next;
            p.next.prev = p.prev;
            p.next = null;
            p.prev = null;
        }
    }
    print() {
        var p = new musicNode();
        p = this.head;
        if (p != null) {

            do {
                console.log(p.name);
                console.log(p.path);
                console.log(p.coverPath);
                p = p.next;
            } while (p != this.head);
        }

    }
    reset(){
        this.head = this.tempHead;
    }
    traverse(name){
        
        while (this.head.name != name) {
            this.head = this.head.next;
        }
    }
}
