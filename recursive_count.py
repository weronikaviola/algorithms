## count number of items in a list using recursion

def recursive_count(a_list):
    if len(a_list) == 0:
        return 0
    else:
        return 1 + recursive_count(a_list[1:])

print(recursive_count([1,2,3,4,5,6,7,8]))
print(recursive_count([6]))
print(recursive_count([]))