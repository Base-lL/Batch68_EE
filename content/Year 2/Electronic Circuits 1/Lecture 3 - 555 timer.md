---
tags:
  - year2-Sem1
  - Electronics
---
# stable configurations
they use a kind of external trigger to control.

the 2 following configs use the same formula for time:
$$
T = 1.1\times RC
$$
>[!note] 
>how 1.1 came has to do with the capacitor and exponentials and has a proof


## monostable configuration
- uses one trigger for starting
- stays ON until it's duration then switches OFF

##  bistable configuration
- uses one trigger for starting
- stays ON until the second trigger sets it to OFF

# astable configuration
- built-in automatic triggering
- oscillates between ON and OFF 
- used to generate square waves with different duty cycles

the timer keeps oscillating between 2/3 VCC and 1/3 VCC.
- when the capacitor is *charging* it's set to **HIGH**
$$
t_H = 0.694(R_1+R_2)C_\text{ext}
$$
- when the capacitor is *discharging* it's set to **LOW**
$$
t_L = 0.694\;R_2\;C_\text{ext}
$$
total time:
$$
T = t_H + t_L = 0.694(R_1+2R_2)C_\text{ext}
$$
frequency:
$$
f_r = \frac{1.44}{(R_1 + 2R_2)\;C_\text{ext}}
$$
Duty cycle:
$$
\text{Duty cycle} = \frac{t_H}{T}\cdot 100\% = \frac{R_1 + R_2}{R_1 + 2R_2} \cdot 100\%
$$

## astable with a diode
note that the lowest duty cycle you can get is 50%
to get a lower duty cycle, we can attach a diode to $R_2$ 

frequency:
$$
f_r = \frac{1.44}{(R_1 + R_2)\;C_\text{ext}}
$$
Duty cycle:
$$
\text{Duty cycle} = \frac{t_H}{T}\cdot 100\% = \frac{R_1}{R_1 + R_2} \cdot 100\%
$$









