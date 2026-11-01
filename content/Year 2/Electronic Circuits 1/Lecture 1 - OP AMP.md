---
tags:
  - year2-Sem1
  - Electronics
---
a continuation of old [[1. Operational Amplifier|op-amp]] lecture, i advise giving it a quick look
# quick recap

an ideal op-amp has:
- infinite open-loop voltage gain
- infinite input impedance
- zero output impedance
- infinite speed (infinite bandwidth)

gain is expressed as $A = \dfrac{V_{out}}{V_{in}}$

## Non-inverting Amplifier

![[OP_AMP_non-inverting.svg]]
$$
\frac{V_{out}}{V_{in}} \approx 1+\frac{R_1}{R_2}
$$
## Inverting Amplifier
![[OP_AMP_inverting.svg]]
$$
\frac{V_{out}}{V_{in}} = -\frac{R_2}{R_1}
$$

## Integrator
![[OP_AMP_integrate.svg]]
$$
\frac{V_{out}}{V_{in}} = -\frac{1}{R_1 C_1 s}
$$
where is is the frequency domain $s=j\omega=2\pi j f$

### integrator characteristics

Provides a *pole* at the origin
Acts as a *low-pass* filter

<div class="xtable" style="--dir: left;">
    <div>
        <p>As the <b>input frequency</b> goes to <i>zero:</i></p>
        <p>- V<sub>out</sub> / V<sub>in</sub> approaches <i>infinity</i></p>
        <p>- The capacitor impedance becomes <i>very large</i> at low frequencies, approaching an <i>open circuit</i> and reducing the circuit to the open-loop op amp.</p>
    </div>
    <div> 
        <p>As the <b>input frequency</b> goes to <i>infinity:</i></p>
        <p>- V<sub>out</sub> / V<sub>in</sub> approaches <i>zero</i></p>
        <p>- The capacitor impedance becomes <i>very low</i> at high frequencies, approaching a <i>short circuit</i> and reducing the circuit to zero gain.</p>
    </div>
</div>


## Differentiator

![[OP_AMP_differentiate.svg]]
$$
\frac{V_{out}}{V_{in}} = -{R_1 C_1 s}
$$
### Differentiator characteristics

Exhibits a *zero* at the origin
The circuit acts as a **high-pass filter**

<div class="xtable" style="--dir: left;">
    <div>
        <p>At <i>low</i> frequency</p>
        <p>the capacitor acts as an open circuit</p>
        <p>zero current flows through R1</p>
    </div>
    <div> 
        <p>At <i>high</i> frequency</p>
        <p>the reactance of the capacitor approaches zero</p>
        <p>The closed loop gain approaches infinity</p>
    </div>
</div>

## Voltage Adder

![[OP_AMP_voltAdd.svg]]

the sum of the currents at node X can be represented as:
$$
\frac{V_1}{R_1} + \frac{V_2}{R_2} = -\frac{V_\text{out}}{R_F}
$$
and from this we get:
$$
V_\text{out} = -R_f\left(\frac{V_1}{R_1} + \frac{V_2}{R_2}\right)
$$

## Unity Gain Amplifier (Buffer)

![[OP_AMP_buffer.svg]]

serves as a way to isolate the voltage input from being affected by the circuits load

## Differential Amplifier (Voltage Subtractor)

vout+ due to V1:
$$
V_\text{out+} = V_1\left(\frac{R_2}{R_1 +R_2}\right) \left(1+\frac{R_4}{R_3}\right)
$$
vout- due to V2:
$$
V_\text{out-}=-V_2\frac{R_4}{R_3}
$$

Total output:
$$
\begin{aligned}
V_\text{out} &= V_\text{out+} + V_\text{out-}\\[5px]
&= V_1\left(\frac{R_2}{R_1 +R_2}\right) \left(1+\frac{R_4}{R_3}\right)-V_2\frac{R_4}{R_3}
\end{aligned}
$$
using equal resistances:
$$
V_\text{out} = V_1 - V_2
$$




