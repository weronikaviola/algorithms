#recursive sum of the list/array
my_list = []

def recursive_sum(a_list):
    if len(a_list) == 0:
        return 0
    else: 
        return a_list[0] + recursive_sum(a_list[1:])


print(recursive_sum(my_list))