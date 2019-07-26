## quicksort algorythm

def quicksort(an_array):
    if len(an_array) < 2:
        return an_array
    else:
        pivot = an_array[0]
        less = [ n for n in an_array[1:] if n < pivot ]
        greater = [ n for n in an_array[1:] if n >= pivot ]
        return quicksort(less) + [pivot] + quicksort(greater)


##this one uses middle number as pivot (what gives bog O of nlogn )

def quicksort_two(an_array):
    if len(an_array) < 2:
        return an_array
    else:
        pivot = an_array.pop(len(an_array)//2)
        less = [ n for n in an_array if n < pivot ]
        greater = [ n for n in an_array if n >= pivot]
        return quicksort_two(less) + [pivot] + quicksort_two(greater)


print(quicksort_two([1,4,2,3]))
print(quicksort_two([1,3]))
print(quicksort_two([1,4,2,3,10,0,3]))


## remember that 
## THE BEST WAY TO SOLVE QUICKSORT IS TO RANDOMLY CHOOSE THE PIVOT
## this will guarantee an average of n log n 