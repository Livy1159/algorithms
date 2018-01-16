def quick_sort(array, left = 0, right = array.length - 1)
  pivot = partition(array, left, right)
  new_pivot = pivot - 1
  if left < new_pivot
    quick_sort(array, left, new_pivot)
  end
  array
end

def partition(array, left, right)
  pivot = ((left + right) / 2).floor
  while left <= right
    while array[left] < array[pivot]
      left += 1
    end
    while array[right] > array[pivot]
      right -= 1
    end
    if left <= right
      swap(array, left, right)
      left += 1
      right -= 1
    end
  end
  left
end

def swap(array, index_1, index_2)
  temp = array[index_1]
  array[index_1] = array[index_2]
  array[index_2] = temp
end

my_array = [4, 7, 2, 1, 9]

quick_sort(my_array)