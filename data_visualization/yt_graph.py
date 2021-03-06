# -*- coding: utf-8 -*-
"""YT_graph

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1p00F6gAI-p7fLqPgDMIbSSvkTul4bodu
"""



"""## Set up """

# Commented out IPython magic to ensure Python compatibility.
## imports
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
pd.plotting.register_matplotlib_converters()
# %matplotlib inline
import seaborn as sns
print("Setup Complete")

provinces = np.array(['NL', 'PE', 'NS', 'NB', 'QC', 'ON', 'MB', 'SK', 'AB', 'BC', 'YT', 'NT', 'NU'])
print(provinces)
# print(provinces[3])
# print(type(provinces))

# for item in provinces:
#  if item == a:
#    print("Yes")
#  else: 
#    print("Invalid input")
#    break;

"""YT  Data"""

## checking the files
import os
from google.colab import files
YT_water = files.upload()
print("File Uploaded")

import io
df_YT = pd.read_csv(io.BytesIO(YT_water['YT_waterlevels.csv']))
print("Dataset is now stored in a Pandas Dataframe")

# make sure data is clean

# first 5 rows
df_YT.head()

# last 5 rows
df_YT.tail()

"""## Plot the Data - MB"""

# Line chart showing water levels in a certain province 
# sns.lineplot(data=df_NL)

# Set the width and height of the figure
plt.figure(figsize=(14,6))

# for every day
arr = np.array([24, 48, 72, 96, 120, 144, 168, 192, 216, 240, 264,
288, 312, 336, 360, 384, 408, 432, 456, 480, 504, 528,
552, 576, 600, 624, 648, 672, 696, 720, 744, 768, 792,
816, 840, 864, 888, 912, 936, 960, 984, 1008, 1032, 1056,
1080, 1104, 1128, 1152, 1176, 1200, 1224, 1248, 1272, 1296, 1320,
1344, 1368, 1392, 1416, 1440, 1464, 1488, 1512, 1536, 1560, 1584,
1608, 1632, 1656, 1680, 1704, 1728, 1752, 1776, 1800, 1824, 1848,
1872, 1896, 1920, 1944, 1968, 1992, 2016, 2040, 2064, 2088, 2112,
2136])

for a in range(89):
  var = arr[a];
  plt.axvline(x = var, color ='lightblue', linewidth = 0.5)

plt.axhline(y=29.6, color="#4682B4", linewidth = 0.6)

# Add title
plt.title("Water Levels and Recommended Level for Yukon for the past 89 days from today", color = 'blue')

# x label
plt.xlabel("Data for the past 89 days from today (blue lines indicating a different day and x values indicating hourly values)")

# y label
plt.ylabel("Water level (in m)")

# limits
plt.ylim(top = 14.1155)
plt.ylim(bottom = 14.1135)

# Line chart 
sns.lineplot(data=df_YT)

