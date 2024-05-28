# def add(x,y):
#     return x+y


# def sub(x,y):
#     return x-y


# def multiplay(x,y):
#     return x*y

# def divide(x,y):
#     return x*1.0/y
import tkinter as tk
from tkinter import messagebox

# Function to evaluate the expression
def evaluate_expression():
    try:
        result = eval(display.get())
        display.delete(0, tk.END)
        display.insert(tk.END, str(result))
    except Exception as e:
        messagebox.showerror("Error", "Invalid expression")

# Function to append characters to the display
def append_to_display(char):
    display.insert(tk.END, char)

# Function to clear the display
def clear_display():
    display.delete(0, tk.END)

# Create the main window
root = tk.Tk()
root.title("Calculator")

# Create the display entry widget
display = tk.Entry(root, font=("Arial", 20), borderwidth=5, relief="sunken")
display.grid(row=0, column=0, columnspan=4, padx=10, pady=10, sticky="we")

# Define button labels
buttons = [
    '7', '8', '9', '/', 'C',
    '4', '5', '6', '*', '(',
    '1', '2', '3', '-', ')',
    '0', '.', '=', '+', 
]

# Create and place the buttons in the grid
row_val = 1
col_val = 0
for button in buttons:
    if button == "=":
        btn = tk.Button(root, text=button, font=("Arial", 18), command=evaluate_expression)
    elif button == "C":
        btn = tk.Button(root, text=button, font=("Arial", 18), command=clear_display)
    else:
        btn = tk.Button(root, text=button, font=("Arial", 18), command=lambda char=button: append_to_display(char))
    
    btn.grid(row=row_val, column=col_val, sticky="nsew")
    
    col_val += 1
    if col_val > 4:
        col_val = 0
        row_val += 1

# Make the buttons expand to fill the space
for i in range(5):
    root.grid_columnconfigure(i, weight=1)
for i in range(5):
    root.grid_rowconfigure(i, weight=1)

# Run the application
root.mainloop()


