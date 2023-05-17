import csv

def count_null_values(csv_file):
    null_count = 0

    with open(csv_file, 'r') as file:
        reader = csv.reader(file)
        header = next(reader)  # 如果有表头，可以跳过第一行

        for row in reader:
            for value in row:
                if value is None or value.strip() == "":
                    null_count += 1

    return null_count

csv_file = 'P5-Data-Visualization/data/Airport_fromArea.csv'  # 替换为你的 CSV 文件路径
null_values = count_null_values(csv_file)
print(f"The CSV file contains {null_values} null values.")