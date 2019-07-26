# python3
import random 

def random_array(len):
    random_arr = []
    for number in range(len):
        ran = random.randint(0, 10000)
        random_arr.append(ran)
    return random_arr

def max_pairwise_product(numbers):
    n = len(numbers)
    max_product = 0
    for first in range(n):
        for second in range(first + 1, n):
            max_product = max(max_product,
                numbers[first] * numbers[second])

    return max_product

def max_pairwise_product_fast(numbers):
    n = len(numbers)
    max_product = 0
    index_a = 0
    for first in range(n):
        if numbers[first] > numbers[index_a]:
            index_a = first;
    if index_a == 0:
        index_b = 1
    else:
        index_b = 0
    for second in range(n):
        if (second != index_a) and (numbers[second] > numbers[index_b]):
            index_b = second
    return numbers[index_a] * numbers[index_b]

def stress_test():
    while(True):
        random_num = random.randint(2, 10)
        arr = random_array(random_num)
        print(random_num)
        print("\n")
        print(arr)
        max_classic = max_pairwise_product(arr)
        max_fast = max_pairwise_product_fast(arr)
        print(max_classic)
        print(max_fast)
        if max_classic != max_fast:
            break
        
stress_test()
# if __name__ == '__main__':
#     input_n = int(input())
#     input_numbers = [int(x) for x in input().split()]
#     print(max_pairwise_product(input_numbers))

