class BinaryTree:
    def __init__(self, value):
        self.value = value
        self.left_child = None
        self.right_child = None
    def insert_left(self, value):
        if self.left_child == None:
            self.left_child = BinaryTree(value)
        else: 
            new_node = BinaryTree(value)
            new_node.left_child = self.left_child
            self.left_child = new_node
    def insert_right(self, value):
        if self.right_child == None:
            self.right_child = BinaryTree(value)
        else: 
            new_node = BinaryTree(value)
            new.node.right_child = self.right_child
            self.right_child = new_node

#DFS pre-order
def pre_order(self):
    print(self.value)
    if self.left_child:
        self.left_child.pre_order()
    if self.rignt_child:
        self.right_child.pre_order()

#DFS in-order
def in_order(self):
    if self.left_child:
        self.left_child.in_order()
    print(self.value)
    if self.right_child:
        self.right_child.in_order()

#DFS post-order
def post_order(self):
    if self.left_child:
        self.left_child.post_order()
    if self.rignt_child:
        self.right_child.post_order()
    print(self.value)

