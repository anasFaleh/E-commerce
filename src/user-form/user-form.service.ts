import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Step1Dto } from './dto/step1.dto';
import { Step2Dto } from './dto/step2.dto';

@Injectable()
export class UserFormService {
  constructor(private prisma: PrismaService) {}

  async saveStep1(dto: Step1Dto){
    const user = await this.prisma.form.findUnique({where:{email: dto.email}});
    if(user) throw new ConflictException('You already filled step 1');

    const step1 = await this.prisma.form.create({
      data:{
        email: dto.email,
        step1Data: {...dto}
      }
    })

    return step1;
  }

  async saveStep2(dto: Step2Dto, formId: number){
    const user = await this.prisma.form.findUnique({where:{id: formId}});
    if(!user) throw new ConflictException('You have to fill step 1 first ');

    const step2 = await this.prisma.form.update({
      where: {email: user.email},
      data:{
        step2Data: {...dto},
        currentStep: 2
      }
    })
    return step2;
  }

  async submit(formId: number){
    const user = await this.prisma.form.findUnique({where:{id: formId}});
    if(user?.currentStep !== 2) throw new ConflictException('You have to fill step 2 first ');

    const submit = await this.prisma.form.update({
      where: {email: user.email},
      data:{
        isCompleted: true
      }
    })
    return submit;
  }

  async getStep(formId: number,step: number){
    const form = await this.prisma.form.findUnique({where:{id:formId}})
    if(!form) throw new NotFoundException('form not found');

    if(step === 1){
      return form.step1Data
    }else if(step === 2){
      return form.step2Data
    };
  }

   

  
}

