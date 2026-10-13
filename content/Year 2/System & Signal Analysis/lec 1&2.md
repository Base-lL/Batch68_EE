---
tags:
  - year2-Sem1
  - Systems-Signals
---
# Course definition
## Signals
A signal is a set of data or information
signals appear in many forms, *examples*:
- audio waves *i.e* human voice
- computer data *i.e* sending or receiving files between devices
- ECG (heartbeat signals)

signals can be expressed as a function of a variable with **time**
> [!note] 
> usually signals can take different forms of input but in this course signals will always be assumed to be functions of time

signals can can be analyzed, amplified and used in various applications via **systems**

## Systems
A system is an entity that can process a set of signals *(inputs)* and yield another set of signals *(output)*
systems don't generally need to be complicated, an entity that functions through a signal is a system ,*examples*:
- a speaker *(voice waves to digital signal)*
- a factory assembly line
- a factory robot arm
- phones and computers
- the human body

# Size of a signal
signals vary in shape and amplitude, we need to get a number that will indicate the signal size or signal strength.
for example, imagine we need a number to express the size of the human body, we could use the person's *volume*.
using a similar analogy, we can measure a signal from it's **Energy**:
$$
E_x = \int_{-\infty}^{\infty} |x^2(t)|dt
$$
> [!note] 
> the absolute value was taken in the case $x(t)$ was a complex function, we have to integrate over the positive values of the signal

but what if the signal was periodic?
the resulting energy is $\infty$ which can't tell us much about the signal

so for the case of *periodic signals*, we measure it's **power**:
$$
P_x = \lim_{T\rightarrow\infty} \frac{1}{T} \int_{-T/2}^{T/2} |x^2(t)|dt
$$
which for periodic signals, $T$ is the period of a cycle and the integral points are a cycles' region

> [!note] 
> for the case of a *Diverging, non-periodic* signal, neither methods give a valid number.

# Signal operations
for a general signal $x(t)$

## Time shifting
moves a signal along the time axis:
- $x(t-T)$ moves to the right *(delay)*
- $x(t+T)$ advances it to the left *(advance)*
*note*: in all cases ($T > 0$)



![[Pasted image 20261006213521.png]]
## Time scaling
moves a signal along the time axis:
- $x(at)$: *compresses*
- $x(\dfrac ta)$: *expands*
*note*: in all cases ($a > 1$)

![[Pasted image 20261006214157.png]]

## Time Reversal
flips the signal around the *vertical axis*
$x(t) \Rightarrow x(-t)$


![[Pasted image 20261006214438.png]]

## Combined operations
we can combine the previous operations together as $x(at-b)$
for a value that lies on $t$ and has amplitude $x$:

x before and after the operations *stays the same*

to get the new value $t_s$ that has the same amplitude $x$ :
$$
t = at_s-b \quad\Rightarrow\quad t_s = \frac{t+b}{a}
$$

think about as if all domain values got moved to a new location
we try to find where a certain input $t$ that gives the output $x$ goes after moving the domain *(which is $t_s$)*

# Solving signal operations

using this function as an example, we want to graph $x(2t-4)$

<center><img src ="Pasted image 20261006221911.png"></center>

$$
x(t) =
\begin{cases}
-t, & -4 \le t < 0 \\ 
t, & 0 \le t < 2 \\ 
0, & \text{otherwise}
\end{cases}
$$

### get the key points
we have the values
$t_1 = -4$
$t_2 = 0$
$t_3 = 2$

we want to find where they lie after the transform

$t_1 = a (t_{s1})-b$
$-4 = 2t_{s1} - 4$
$t_{s1} = 0$

### repeat for the other points:
$t_{s1} = 0$
$t_{s2} = 2$
$t_{s3} = 3$

### assign amplitude
$t_{s1}:0 \rightarrow 4$
$t_{s2}:2 \rightarrow 0$
$t_{s3}:3 \rightarrow 2$

### draw the new graph

![[Pasted image 20261006222841.png]]


