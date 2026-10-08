---
title: Real Stories
sidebar_position: 15
---

# Real Stories

Sometimes the easiest way to understand cybersecurity is to look at what actually happened.

Here are two real examples.

---

## Story 1: Colonial Pipeline

In 2021, Colonial Pipeline — a major fuel pipeline operator in the United States — was hit by a ransomware attack.

The company later told the US Senate that attackers used credentials for an old VPN account.

That account was still active.

And importantly:

## It did not have multi-factor authentication.

The password was not something simple like `Password123`.

It was described as a complicated password.

But once the attackers had it, there was no second check stopping them.

<div className="alert alert--warning" role="alert">

**The important lesson:**

A strong password is useful.

But a strong password on its own is not always enough.

</div>

---

## What could have helped?

### Multi-factor authentication

If the account had required another factor, such as a security token or approval on another device, the stolen password alone may not have been enough.

This is exactly why we use:

**Something you know**

plus

**Something you have**

---

## Question for the room

What is the surprising part?

### A

The password was very weak

### B

The attackers did not need to crack a simple password

### C

A second security step was missing

The important answer is:

## C

A complicated password did not protect the account once the password itself had been compromised.

---

## Story 2: 23andMe

In 2023, attackers gained access to some 23andMe accounts.

But this was not simply a case of criminals breaking into 23andMe and discovering everybody's passwords.

Instead, attackers used:

## Credential stuffing

They tried usernames and passwords that had already been exposed elsewhere.

Some people had reused those same details on 23andMe.

That meant the old leaked credentials worked again.

---

## How many accounts?

23andMe later reported that attackers directly accessed around:

## 0.1% of user accounts

That sounds small.

But access to those accounts also allowed the attackers to reach information connected through features such as **DNA Relatives**.

The company later reported that around:

- **5.5 million DNA Relatives profiles**
- **1.5 million Family Tree profiles**

were connected to affected accounts.

<div className="alert alert--warning" role="alert">

**A small number of reused passwords led to a much larger exposure of information.**

</div>

---

## What could have helped?

The most important lesson is:

### Do not reuse important passwords

If a password leaked from one website does not work anywhere else, credential stuffing becomes much less useful.

A password manager makes this much easier.

---

## Question for the room

Imagine your password from an old shopping website appears in a data leak.

But every other account has a completely different password.

How many other accounts can the criminal access using that leaked password?

### Hopefully none.

That is exactly the point of unique passwords.

---

## Two different attacks — two different lessons

### Colonial Pipeline

**Stolen password + no MFA**

Lesson:

**Add another layer of protection.**

### 23andMe

**Previously exposed credentials reused on another website**

Lesson:

**Do not reuse passwords.**

---

<div className="alert alert--success" role="alert">

**The big takeaway**

You do not need to be able to stop every cyberattack.

You want to make sure that **one problem does not turn into five problems**.

Use unique passwords.

Use multi-factor authentication.

Protect your email account especially well.

</div>
