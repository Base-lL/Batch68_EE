#1stSem #mathmatics #projects
<div class="xtable"  style = "--ta : left; --ws: normal; --ai: center" >
	<div><h1>CIRCUIT DEFINETION</h1> 
		The circuit represents a simplified model of real electrical systems such as filters and control systems, where multiple paths and energy storage elements affect system behavior.
		<h2>The objective of this circuit</h2> 
		 <h3>1. study differential equations of different degrees</h3>
		<div class="xtable"  style = "--ta : center; --ws: normal" >
			<div>
				<h4>RL circuit</h4>
				differential equations of the 1st degree
			</div>
			<div><h4>RLC circuit</h4> 
				differential equations of the 2nd degree 
			</div>
		</div>
		<h3>2. to know the difference between:</h3>
			<h4>Transient response</h4>
			<h4>Steady-state response</h4>
	</div>
	<img src = "Pasted image 20251221235529.png"  height=350 width=600 >
</div>

# CIRCUIT ANALYSIS

- the circle is divided into 2 parts, the *upper* part being **a RLC circuit**, and the *lower* part being **a RL circuit**

- since the 2 part share the same two nodes, they both **have the same voltage** drop across them

- voltage across the resistor:  $\large V_R = IR$

- voltage across the inductor:  $\large V_L = \dfrac{dI}{dt}L$

- voltage across the capacitor:  $\large V_C = \dfrac{Q}{C}$ 

- remember that the current $I = \dfrac{dq}{dt}$

## the equation can be divided into:

### RLC PART:

$$
\large\begin{array}{l}
 V_R + V_L  + V_C = E\\
 I_1R + \dfrac{dI_1}{dt}L + \dfrac{Q}{C} = V_\text{max}\sin\omega t\\
\dfrac{dQ_1}{dt}R + \dfrac{d^2Q_1}{dt^2} L + \dfrac{Q}{C} = V_\text{max}\sin\omega t \\\\
\because R = 2 \quad,\quad L = 1 \quad,\quad C = 0.25 \quad,\quad V_\text{max}=10 \quad,\quad \omega=4\\\\
\therefore 2\dfrac{dQ_1}{dt} + \dfrac{d^2Q_1}{dt^2} + 4Q = 10\sin4 t \\
\color{#acffcc}\text{Let}\dfrac{d}{dt} = D \rightarrow \color{#f7ecc2}
(D^2+2D+4)Q = 10\sin4 t\\\\
\end{array}
$$

#### solving for $Q_c$:

$$
\large\begin{array}{c}
(D^2 + 2D + 4)Q = 0\\
\text{Let } Q=e^{mt} \quad\rightarrow\quad DQ=me^{mt} \quad\rightarrow\quad D^2Q=m^2e^{mt}\\\\
m^2e^{mt} + 2me^{mt} + 4e^{mt} = 0 \quad\rightarrow\quad m^2 + 2m + 4 =0\\\\
\begin{array}{l l}
    m_{1,2} = \dfrac{-2 \pm \sqrt{2^2 - 4(1)(4)}}{2(1)} & \color{#acffcc}\text{Quadratic Formula} \\[1em]
    m_{1,2} = \dfrac{-2 \pm \sqrt{-12}}{2} & \color{#acffcc}\text{Simplify Root} \\[1em]
    m_{1,2} = -1 \pm i\sqrt{3} & \color{#acffcc}\text{Roots } (\alpha=-1, \beta=\sqrt{3}) \\[1em]
    Q_c = e^{\alpha t}(k_1 \sin \beta t + k_2 \cos \beta t) & \color{#acffcc}\text{Where $k_1$ and $k_2$ are constants} \\[1em]
    Q_c = e^{-t}(k_1 \sin \sqrt{3} t + k_2 \cos \sqrt{3} t) & \color{#acffcc}\text{Final Result \#}
\end{array}
\end{array}
$$

#### solving for $Q_p$:

$$
\large\begin{array}{c}
Q_p = \dfrac{10}{D^2 + 2D + 4} \{ \sin(4t) \}\\\\
\text{For} \sin(at),\; D^2 = -a^2 \quad,\quad a=4 \quad,\quad D^2 = -(4^2) = -16 \\\\
\begin{array}{l  l}
    Q_p = \dfrac{10}{-16 + 2D + 4} \{ \sin(4t) \} & \color{#acffcc}\text{Subs. } D^2 = -16  \\[1em]
    Q_p = \dfrac{10}{2D - 12} \{ \sin(4t) \} & \color{#acffcc}\text{Simplify Denominator} \\[1em]
    Q_p = \dfrac{5}{D - 6} \{ \sin(4t) \} & \color{#acffcc}\text{Divide by 2} \\[1em]
    Q_p = \dfrac{5(D + 6)}{D^2 - 36} \{ \sin(4t) \} & \color{#acffcc}\text{Multiply by Conjugate } (D+6) \\[1em]
    Q_p = \dfrac{5(D + 6)}{-16 - 36} \{ \sin(4t) \} & \color{#acffcc}\text{Subs. } D^2 = -16 \text{ again} \\[1em]
    Q_p = \dfrac{5(D + 6)}{-52} \{ \sin(4t) \} & \color{#acffcc}\text{Simplify Denominator} \\[1em]
    Q_p = -\dfrac{5}{52} [ \frac{d}{dt}(\sin 4t) + 6 \sin 4t ] & \color{#acffcc}\text{Apply } D \text{ (Derivative)} \\[1em]
    Q_p = -\dfrac{5}{52} [ 4 \cos 4t + 6 \sin 4t ] & \color{#acffcc}\text{Compute Derivative} \\[1em]
    Q_p = -\dfrac{5}{13} \cos(4t) - \frac{15}{26} \sin(4t) & \color{#acffcc}\text{Final Result \#}
\end{array}
\end{array}
$$

#### solving for $Q_1(t)$ and  $I_1(t)$  :


$$
\large\begin{array}{l}
Q_1(t) = Q_c + Q_p = e^{-t}(k_1 \sin \sqrt{3} t + k_2 \cos \sqrt{3} t) +\left(-\dfrac{5}{13} \cos(4t) - \frac{15}{26} \sin(4t)\right)\\
\begin{align}
I_1(t) &= \dfrac{dQ_1}{dt}\\\\
&=e^{-t}\left[(-k_1-\sqrt3\,k_2) \sin \sqrt{3}\,t +(-k_2+\sqrt3\,k_1) \cos \sqrt{3}\,t\right] +\left(\dfrac{20}{13} \sin(4t) - \frac{30}{13} \cos(4t)\right)
\end{align}\\
\text{at } t = 0 \rightarrow I = 0 \quad , \quad Q = 0\\
\begin{array}{l}
Q_1(0) = k_2 -\dfrac{5}{13} = 0 &\quad\rightarrow\quad& k_2 = \dfrac{5}{13}\\
I_!(0) = -k_2+\sqrt3 - \dfrac{30}{13} = 0 &\quad\rightarrow\quad& k_1 = \dfrac{35\sqrt3}{39}
\end{array}\\\\
Q_1(t) = e^{-t}\left(\dfrac{35\sqrt{3}}{39} \sin \sqrt{3} t + \dfrac{5}{13} \cos \sqrt{3} t\right) - \dfrac{5}{13} \cos(4t) - \frac{15}{26} \sin(4t) \\\\
I_1(t) = e^{-t}\left[-\dfrac{50\sqrt{3}}{39} \sin \sqrt{3} t + \dfrac{30}{13} \cos \sqrt{3} t\right] + \dfrac{20}{13} \sin(4t) - \frac{30}{13} \cos(4t)
\end{array}
$$


### RL PART:

$$
\large\begin{array}{l}
 V_L + V_R = V_\text{max}\sin\omega\\
\dfrac{dI_2}{dt}L + \large I_2R = V_\text{max}\sin\omega t\\\\
\because R = 4 \quad,\quad L = 2 \quad,\quad V_\text{max}=10 \quad,\quad \omega=4\\\\
\therefore 2\dfrac{dI_2}{dt} + 4\large I_2 = 10\sin4 t\\
=\dfrac{dI_2}{dt} + 2\large I_2 = 5\sin4 t
\end{array}
$$

#### this is a linear differential equations of the first order of the form $\dfrac{dy}{dx}+f(x)y = g(x)$
#### by taking the integration factor $\micro(x)$ :

$$
\large\begin{align}
\micro(x) 
&= e^{\int f(t)dt}\\
&= e^{\int2dt}\\
&= e^{2t}
\end{align}
$$

#### and from the integration factor: 

$$
\large\begin{array}{l}
\begin{align}
I_2 &= \dfrac{1}{\micro} \int \micro g(t)dt\\
&= \dfrac{1}{e^{2t}} \int 2e^{2t} \cdot5\sin4t \,dt\\
&= \dfrac{1}{e^{2t}}\left[ e^{2t} \left(\,\sin(4t) - 2 \cos(4t)\,\right) + C\right]\\
&= \dfrac12 \left(\sin\left(4t\right) - 2 \cos\left(4t\right)\right) + Ce^{-2t}\\
\end{align}\\\\
\because\text{at } t = 0 \quad,\quad I_2 = 0\\
\therefore 0 = \dfrac12\left( 0-2 \right) + C \quad,\quad C = 1\\\\
I_2 = \dfrac12 \sin4t - \cos4t + e^{-2t}
\end{array}
$$

## total current equation:

$$
\large\begin{align}
I(t) & = I_1 + I_2\\
&= e^{-t}\left[-\dfrac{50\sqrt{3}}{39} \sin \sqrt{3}\,t + \dfrac{30}{13} \cos \sqrt{3}\,t\right]\\
&+\left(\dfrac{20}{13} \sin(4t) - \frac{30}{13} \cos(4t)\right) + \dfrac12 \sin4t - \cos4t + e^{-2t}\\\\
&= e^{-t}\left[-\dfrac{50\sqrt{3}}{39} \sin \sqrt{3}\,t + \dfrac{30}{13} \cos \sqrt{3}\,t\right] + \dfrac{53}{26} \sin(4t) - \frac{43}{13} \cos(4t) + e^{-2t}
\end{align}
$$
































