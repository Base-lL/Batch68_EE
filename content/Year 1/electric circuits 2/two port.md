this lecture is just these equations:
$$
\begin{array}{c}
\text{Z-Parameters (Impedance)} \\
V_1 = z_{11} I_1 + z_{12} I_2 \\
V_2 = z_{21} I_1 + z_{22} I_2 \\[20px]
\hline
\text{Y-Parameters (Admittance)} \\
I_1 = y_{11} V_1 + y_{12} V_2 \\
I_2 = y_{21} V_1 + y_{22} V_2 \\[20px]
\hline
\text{ABCD-Parameters (Transmission)} \\
V_1 = a_{11} V_2 - a_{12} I_2 \\
I_1 = a_{21} V_2 - a_{22} I_2 \\[20px]
\hline
\text{Inverse ABCD-Parameters (Inverse Transmission)} \\
V_2 = b_{11} V_1 - b_{12} I_1 \\
I_2 = b_{21} V_1 - b_{22} I_1 \\[20px]
\hline
\text{h-Parameters (Hybrid)} \\
V_1 = h_{11} I_1 + h_{12} V_2 \\
I_2 = h_{21} I_1 + h_{22} V_2 \\[20px]
\hline
\text{g-Parameters (Inverse Hybrid)} \\
I_1 = g_{11} V_1 + g_{12} I_2 \\
V_2 = g_{21} V_1 + g_{22} I_2 \\
\end{array}
$$








that's basically all you need to know to solve for two port problems

but what are doing exactly???

# Two port circuit

a **one port circuit** has one terminal input and one terminal output. that can be:
- a resistor
- two resistors in series or parallel
- a resistor with an inductor
- ...etc

a **two port circuit** has 2 terminal inputs and 2 terminal outputs. which can lead into much more complex internal component connections

*unlike a one port circuit*, two port circuits can NOT have a:
- dependent source
- charged passive components (*i.e capacitor/inductor*)

# Solving Two port circuit

the two port circuit terminals are identified as $V_1$ , $I_1$ for input and $V_2$ , $I_2$ for output
we will need to make a relationship for 2 variables with another 2 variables
take for example **the transmission parameters**

$$
V_1 = a_{11} V_2 - a_{12} I_2 \quad,\quad
I_1 = a_{21} V_2 - a_{22} I_2 
$$

we can related the input's voltage and current with the output's
to solve the equation, we have to make one parameter equal zero

to get $a_{11}$ in the first equation, we make $I_2 = 0$ . so we need to *open circuit* the output terminals

we're then left with:
$$
a_{11} = \frac{V_1}{V_2}
$$

to get $a_{12}$ , we make $V_2 = 0$ . so we need to *short circuit* the output terminals

we're then left with:
$$
a_{12} = -\frac{V_1}{I_2}
$$

we repeat the same steps for the rest of the parameters

this exact method applies when trying to find all of the other parameters.
- make part of the equation = 0
	- for **current**: *open* circuit
	- for **voltage**: *short* circuit
- get the corresponding parameter
- repeat until you get all 4

***IMPORTANT***: remember the parameters names and what equation they correspond to

# Special two port circuit

## Series connection

is solved by using the **impedance parameters**

the over all $z$ parameters for the overall network are

$$
\begin{bmatrix}
z_{11} & z_{12} \\ z_{21} & z_{22}
\end{bmatrix}
=
\begin{bmatrix}
z_{11a} + z_{11b} & z_{12a} + z_{12b} \\
z_{21a} + z_{21b} & z_{22a} + z_{22b}
\end{bmatrix}
$$

the value of one parameter is the sum of the two two-port parameters $z = z_a + z_b$


## parallel connection

is solved by using the **admittance parameters**

the over all $y$ parameters for the overall network are

$$
\begin{bmatrix}
y_{11} & y_{12} \\ y_{21} & y_{22}
\end{bmatrix}
=
\begin{bmatrix}
y_{11a} + y_{11b} & y_{12a} + y_{12b} \\
y_{21a} + y_{21b} & y_{22a} + y_{22b}
\end{bmatrix}
$$
just like the impedance, it's the sum of the two other parameters
$y = y_a + y_b$

## cascade connection

is solved by using the **transmission parameters**

*Note*: the transmission parameter can also be called:
- $a_{11} \rightarrow A$ 
- $a_{12} \rightarrow B$ 
- $a_{21} \rightarrow C$
- $a_{22} \rightarrow D$

the matrix form for its equation:

$$
\begin{bmatrix}
V_1 \\ I_1
\end{bmatrix}
=
\begin{bmatrix}
A_a & B_a \\ C_a & D_a
\end{bmatrix}
\begin{bmatrix}
A_b & B_b \\ C_b & D_b
\end{bmatrix}
\begin{bmatrix}
V_1 \\ -I_1
\end{bmatrix}
$$
for the overall transmission parameters:
$$
\begin{bmatrix}
A & B \\ C & D
\end{bmatrix}
=
\begin{bmatrix}
A_a & B_a \\ C_a & D_a
\end{bmatrix}
\begin{bmatrix}
A_b & B_b \\ C_b & D_b
\end{bmatrix}
$$
*we can deduce a one line equation for each parameter but it will be hard to remember, stick to the matrix multiplication*

## series-parallel

is solved by using the **hybrid parameters**
unlike the previous networks, we solve this as one big two-port circuit

## parallel-series

is solved by using the **inverse hybrid parameters**
same as before, solve this as one big two-port circuit