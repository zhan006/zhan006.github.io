---
title: implementation of combination in recursive way
date: 2020-08-14 00:03:19
tags:
---
A recursive way implementing combination
```
def collect(n,arr):
	size = len(arr)
	if n == 0:
		return []
	if n == 1:
		return [[i] for i in arr]
	else:
		res  = []
		for i in range(0,size):
			collection = collect(n-1,arr[i+1:])
			for item in collection:
				item.append(arr[i])
			res.extend(collection)
		return res
```

