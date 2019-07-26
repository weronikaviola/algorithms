## using recursion find the max item in a list

def recursive_max(a_list):
    if len(a_list) == 0:
        return None
    elif len(a_list) == 1:
        return a_list[0]
    elif len(a_list) == 2:
        return a_list[0] if a_list[0] > a_list[1] else a_list[1]
    else:
        temp_max = recursive_max(a_list[1:])
        return a_list[0] if a_list[0] > temp_max else temp_max


print(recursive_max([1,10,3,4,5,6,7,8,9]))
print(recursive_max([0,100]))
print(recursive_max([]))
print(recursive_max([4]))