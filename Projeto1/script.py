import random

def escolha():
    opcoes = []

    for i in range(2):
        opcao= input(f"{i+1}° opção: ")
        opcoes.append(opcao)

    escolhida = random.choice(opcoes)

    return print(escolhida)

escolha()