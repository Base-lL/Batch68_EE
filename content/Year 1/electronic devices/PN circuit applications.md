---
tags:
  - year1-Sem2
  - Electronics
---

# The Diode I-V characteristics

![[Pasted image 20260504223812.png]]

the plots left to right are:
- ideal model
- exponential model
- constant voltage model

## ideal model

- forward bias (at $V \le 0$ ) : no current passes through the diode and it acts as a *short circuit*
- reverse bias (at $V > 0$ ) : all of the current passes through the diode and it acts as an *open circuit*

while it's easier to solve and it's the desirable model to make, it's far from the real model
## exponential model

the passing current is an exp function of voltage:
$$
I = I_0 (e^{qV/kT}-1)
$$

while the curve is correct, the model fails to include an important factor from the real part.

current actually doesn't pass until the voltage across the diode passes a certain value $V_{D,on}$ (*for our cases, this value will be 0.7V but note it differs between every manufacture model*)


## constant voltage model

much like the **ideal model** but shifted to the right to take account for $V_{D,on}$.
unlike the **exponential model**, there is no *leakage current* in reverse bias.

# Limiting circuits

![[Pasted image 20260515185212.png]]

diodes can be used to limit the output voltage like in shown figure.
for current to pass, the nodes' voltage difference has to exceed $V_{D,on}$ 
after exceeding it, voltage on the diode (*and so the output*) remains a constant value equal  $V_{D,on}$
> [!note] 
> current only passes in the region at which $V_{out}$ is constant and it's *no longer proportional* to the voltage across the nodes

but what if want to increase the limiting voltage?
![[Pasted image 20260515185229.png]]

by adding a DC source on each diode with reversed direction, in order for current to pass, the voltage has to exceed  $V_{D,on} + V_B$ 


# Half-Wave Rectifier

![[Pasted image 20260515210450.png]]

the half-wave rectifier circuit removes the negative part of the AC signal and leaves the positive
as shown on the plot, only the positive dome persists while the negative goes to zero
*NOTE*: the output starts *after* $V_{in} \ge V_{D,on}$

## Half-Wave with a capacitor
by replacing the resistance with a capacitor
![[Pasted image 20260515211712.png]]

with the capacitor holding a constant voltage across it. the output is a DC signal
*notice* that on diode's terminals, it has to withstand a voltage drop of nearly $2 V_P$ with no breakdown

## Peak detector (Smoothing) Circuit
same as the capacitor circuit but with a load connected in parallel

![[Pasted image 20260515220408.png]]

this leads to the capacitor discharging in the resistor.
the output is DC-like but not close enough.
increasing $C_1$ leads to a smoother DC ouput


